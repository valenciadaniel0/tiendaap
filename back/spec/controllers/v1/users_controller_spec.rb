require 'rails_helper'

describe V1::UsersController, type: :controller do
  describe 'POST create' do
    params = {
      "name": "Test store",
      "email": "teststore@email.com",
      "username": "teststore",
      "password": "123456",
      "role": 2
    }
    context "when the data is correct" do
      it 'returns a 201' do
        post :create, params: { user: params }
        expect(response).to have_http_status(:created)
      end
    end
    context "when the email was already used" do
      it 'returns 422' do
        FactoryBot.create(:user, email: 'teststore@email.com')
        post :create, params: { user: params }
        expect(response).to have_http_status(422)
      end
    end
  end
end
