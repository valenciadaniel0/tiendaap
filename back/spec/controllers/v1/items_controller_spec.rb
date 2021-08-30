require 'rails_helper'

describe V1::ItemsController, type: :controller do
  let(:user) { create :user }
  let(:product) { create :product, user: user }
  let!(:category) { create :category, product: product }
  
  before do
    @request.env['HTTP_AUTHORIZATION'] = "Bearer #{user.authentication_token}"
  end

  describe 'Post create' do
    params = {
      code: 123,
      status: 1,
      category_id: nil
    }

    context 'when the data is correct' do
      it 'returns a 201' do
        params[:category_id] = category.id
        post :create, params: { item: params }
        expect(response).to have_http_status(:created)
      end
    end
  end
  describe 'Get find_by_code' do
    context 'when there is an item matching the code' do
      let(:item) { create :item, category: category }
      it 'gets the item' do
        get :find_by_code, params: { code: item.code }
        expect(JSON.parse(response.body)['id']).to eq(item.id)
      end
    end
    context 'when there is no any item matching the code' do
      it 'returns no item found message' do
        get :find_by_code, params: { code: 0 }
        expect(JSON.parse(response.body)['error']).to eq('There is no any item with this code')
      end
    end
  end
end
