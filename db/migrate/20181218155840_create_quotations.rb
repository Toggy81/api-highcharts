class CreateQuotations < ActiveRecord::Migration[5.2]
  def change
    create_table :quotations do |t|
      t.json :quotes
      t.string :date

      t.timestamps
    end
  end
end
