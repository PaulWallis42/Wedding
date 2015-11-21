require 'sinatra'
require 'data_mapper'
require './guests.rb'

get '/' do
  erb :index
end

get '/invitees' do
  erb :invitees
end

post '/invitees' do
  Guest.create(name: params[:name], attending: params[:attending], others: params[:others], requests: params[:requests])
  redirect to('/')
end

get '/secret' do
  @guests = Guest.all
  erb :secret
end
