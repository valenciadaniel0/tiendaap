class V1::ProductsController < ApplicationController
  before_action :validate_authentication_token

  def index; end

  def show; end

  def create
    product = Product.new(product_params)
    product.user_id = @current_user.id
    if product.save
      render json: { "message": "Product has been created successfully.", "product_id": product.id }, status: :created
    else
      render json: { errors: product.errors.full_messages }, status: 422
    end
  end

  private

  def product_params
    params.require(:product).permit(:name, :description, :type)
  end
end
