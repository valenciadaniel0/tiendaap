class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  def authenticate
    @current_user = User.find_by_email(params[:email])
    if @current_user&.valid_password?(params[:password])
      @current_user
    else
      head :unauthorized, json: { error: "Email or password are incorrect" }
    end
  end

  def validate_authentication_token
    authenticate_or_request_with_http_token do |token, _options|
      @current_user = User.find_by_authentication_token(token)
      head(:unauthorized) unless @current_user.present?
      @current_user
    end
  end
end
