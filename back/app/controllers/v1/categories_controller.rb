class V1::CategoriesController < ApplicationController
  before_action :validate_authentication_token

  def create
    product = Product.find category_params[:product_id]
    if product.user_id == @current_user.id
      category = Category.new(category_params)
      if category.save
        render json: { "message": "Category has been created_successfully.", "product_id": category.id }, status: :created
      else
        render json: { errors: category.errors.full_messages }, status: 422
      end
    else
      render json: { "error": "You are not authorized to modify this product" }, status: 422 unless product.user_id == @current_user.id
    end
  rescue ActiveRecord::RecordNotFound
    render json: { "error": "Product does not exist" }, status: 422
  end

  private

  def category_params
    params.require(:category).permit(:name, :product_id, :picture, :stock, :price)
  end
end
