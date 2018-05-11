json.array! @episodes do |episode|
  json.title episode.title
  # json.length episode.itunes_duration
  # json.summary episode.itunes_summary
end
