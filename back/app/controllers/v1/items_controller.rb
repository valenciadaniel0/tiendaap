module V1
  class ItemsController < ApplicationController
    before_action :validate_authentication_token

    def create
      if Category.find(item_params[:category_id]).no_items?
        item = Item.new(item_params)
        if item.save
          render json: { message: "Item has been saved successfully" }, status: 201
        else
          render json: { errors: item.errors.full_messages }, status: 422
        end
      else
        render json: { error: 'Cannot add more items to this category' }, status: 422
      end
    end

    def update
      item = Item.find_by(id: params[:id])
      if item.present?
        render json: item.as_json, status: :ok if item.update(item_params)
        render json: { error: 'Could not update the item' }, status: :unprocessable_entity unless item.update(item_params)
      else
        render json: { error: "There is no any item with this id: #{params[:id]}" }, status: :unprocessable_entity
      end
    end

    def find_by_code
      item = Item.find_by_code(params[:code])
      render json: item.as_json if item.present?
      render json: { error: 'There is no any item with this code' } unless item.present?
    end

    private

    def item_params
      params.require(:item).permit(:code, :status, :category_id)
    end
  end
end
