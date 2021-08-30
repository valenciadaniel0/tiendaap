require 'rails_helper'

describe V1::CategoriesController, type: :controller do
  let(:user) { create :user }

  before do
    @request.env['HTTP_AUTHORIZATION'] = "Bearer #{user.authentication_token}"
  end

  describe 'POST create' do
    let(:product) { create :product, user: user }
    params = {
      name: 'Test category',
      stock: 0,
      price: 10000,
      picture: "testpicture.png",
      product_id: nil
    }

    context "when the data is correct" do
      it 'creates a new category' do
        params[:product_id] = product.id
        post :create, params: { category: params }
        expect(response).to have_http_status(:created)
      end
    end

    context 'when the user creating the category is not the same of the product' do
      let!(:user2) { create :user }
      let(:product2) { create :product, user: user2 }
      it 'returns unauthorized to modify the product message' do
        params[:product_id] = product2.id
        post :create, params: { category: params }
        expect(JSON.parse(response.body)['error']).to eq('You are not authorized to modify this product')
      end
    end

    context 'when the product of the category does not exist' do
      it 'raises ActiveRecord::RecordNotFound' do
        params[:product_id] = 0
        post :create, params: { category: params }
        expect(JSON.parse(response.body)['error']).to eq('Product does not exist')
      end
    end
  end
end
