class QuotationsController < ApplicationController
  def index
    response = HTTParty.get('http://www.apilayer.net/api/live?access_key=350369fe30d257d47517249c63612e97&currencies=EUR, BRL, ARS')
  end
end
