class ItemSerializer < ActiveModel::Serializer
  attributes :id, :code, :status

  belongs_to :category
end
