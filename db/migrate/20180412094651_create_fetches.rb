class CreateFetches < ActiveRecord::Migration[5.1]
  def change
    create_table :fetches do |t|

      t.timestamps
    end
  end
end
