class ApplicationController < ActionController::Base

    def authenticate
        user = User.where(email: params[:email]).first
        if user&.valid_password?(params[:password])
            @current_user = user
        else
            head(:unauthorized)
        end
    end

end
