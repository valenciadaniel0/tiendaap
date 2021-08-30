FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "user#{n}@example.com" }
    sequence(:username) { |n| "user#{n}" }
    name { 'Jhon Doe' }
    password { '123456' }
    role { 2 }
  end
end
