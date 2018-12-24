class QuotationsController < ApplicationController
  def index
    count = 0
    7.times do
      date = (Date.today - count).strftime("%Y-%m-%e")
      count += 1
      response = HTTParty.get("http://apilayer.net/api/historical?access_key=350369fe30d257d47517249c63612e97&date=#{date}&currencies=EUR, BRL, ARS")
      Quotation.create(date: response["date"], quotes: response["quotes"])
    end

    @quotations = []
    count = 0
    7.times do
      date = (Date.today - count).strftime("%Y-%m-%e")
      @quotations << Quotation.where(date: date)
      count += 1
    end
    @quotations
  end
end
