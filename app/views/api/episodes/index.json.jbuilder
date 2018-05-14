json.array! @episodes do |episode|
  json.set! episode.id do
    json.title episode.title
    json.summary episode.summary
    json.audio episode.audio
    json.itunes_author episode.itunes_author
  end
end
