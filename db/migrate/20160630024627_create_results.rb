class CreateResults < ActiveRecord::Migration
  def change
    create_table :results do |t|
      t.string :user
      t.string :similarity

      t.timestamps null: false
    end
  end
end
