class V1::UsersController < ApplicationController
    before_action :authenticate, only: %i[ show update destroy] 

    def create  
      user = User.new(user_params)
      if user.save
        render json: user.as_json(only: %i[email authentication_token]), status: :created
      else
        render json: { errors: user.errors.full_messages }, status: 422
      end
    end

    def show
      render json: @current_user.as_json(only: %i[name email username authentication_token picture role])
    end

    def update; end

    def destroy; end

    private    

    def user_params
      params.require(:user).permit(:name, :email, :username, :password, :authentication_token, :picture, :role)
    end
end