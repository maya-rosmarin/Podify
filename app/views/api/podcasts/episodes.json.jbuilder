json.array! @episodes do |episode|
  json.title episode.title
  json.summary episode.summary
  json.audio episode.enclosure_url
  json.entry_id episode.entry_id
end
