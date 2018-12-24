class Quotation < ApplicationRecord
  validates :date, presence: true
  validates :date, uniqueness: true
  validates :quotes, presence: true
end
