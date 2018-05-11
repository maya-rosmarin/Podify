json.array! @episodes do |episode|
  json.title episode.title
  json.summary episode.summary
end
