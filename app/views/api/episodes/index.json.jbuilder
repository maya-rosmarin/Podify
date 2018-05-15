@episodes.each do |episode|
  json.set! episode.id do
    json.id episode.id
    json.title episode.title
    json.summary episode.summary
    json.audio episode.audio
    json.collection_name episode.collection_name
    json.itunes_author episode.itunes_author
  end
end
