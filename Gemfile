source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.4'
# Use postgresql as the database for Active Record
gem 'pg', '~> 0.18'
# Use Puma as the app server
gem 'puma', '~> 3.7'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
# gem 'rack-cors'

gem 'omniauth'
gem 'devise'
gem 'devise_token_auth'
gem "paranoia", "~> 2.4.0"

group :development, :test do
  gem 'pry', '~> 0.11.3'
  gem 'faker', '~> 1.8.7'
  gem 'rspec-rails', '~> 3.7.2'
  gem 'annotate', '~> 2.7.2'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'shoulda-matchers', '~> 3.1.2'
  gem 'database_cleaner', '~> 1.6.2'
  gem 'simplecov', '~> 0.15.1', require: false
  gem 'factory_bot_rails', '~> 4.8.2'
end
