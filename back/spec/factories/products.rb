FactoryBot.define do
  factory :product do
    name { 'Oil' }
    description { 'best oil' }
    inventory { true }

    trait :with_user do
      user { create :user }
    end
  end
end
