class User < ActiveRecord::Base
	# include Tokenable 
	
	has_secure_password

	validates :email, presence: true, uniqueness: true
  validates :email, format: {with: /.+@.+\..+/ }
  validates_presence_of :first_name, :last_name, :password
  # after_create :generate_token

end