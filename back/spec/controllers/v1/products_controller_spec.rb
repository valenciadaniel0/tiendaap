require 'rails_helper'

describe V1::ProductsController, type: :controller do
  let!(:user) { create :user }

  before do
    @request.env['HTTP_AUTHORIZATION'] = "Bearer #{user.authentication_token}"
  end

  describe 'POST create' do
    params = {
      name: "Test product",
      inventory: 1,
      description: "Test product description"
    }

    context "when the data is correct" do
      it "returns a 201" do
        post :create, params: { product: params }
        expect(response).to have_http_status(:created)
      end
    end
  end
end
