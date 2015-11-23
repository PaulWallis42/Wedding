require 'sinatra'
require 'data_mapper'
require './models/guests.rb'

get '/' do
  erb :index
end

post '/invitees' do
  Guest.create(name: params[:name], attending: params[:attending], others: params[:others], requests: params[:requests])
  redirect to('/')
end

get '/secret' do
  @guests = Guest.all
  erb :secret
end

post '/secret' do
  entry = Guest.get(params[:id])
  entry.destroy
  redirect to ('/secret')
end
