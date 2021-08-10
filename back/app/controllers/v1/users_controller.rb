class V1::UsersController < ApplicationController
    before_action :authenticate, only: %i[ show update destroy] 

    def create
        render json: @current_user.as_json(only: [:email, :authentication_token]), status: :created
    end

    def show
        render json: @current_user.as_json(only: [:name, :email, :username, :authentication_token, :picture, :role])
    end

    def update
    end

    def destroy
    end


    private    

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:name, :email, :username, :password, :authentication_token, :picture, :role)
    end
end