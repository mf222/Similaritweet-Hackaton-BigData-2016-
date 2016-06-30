json.array!(@results) do |result|
  json.extract! result, :id, :user, :similarity
  json.url result_url(result, format: :json)
end
