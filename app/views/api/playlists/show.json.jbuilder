json.playlist do
  json.extract! @playlist, :id, :title
  json.episodes @playlist.episodes.map(&:id)
end

json.episodes do
  @playlist.episodes.each do |episode|
    json.set! episode.id do
      json.extract! episode, :id, :title, :summary, :audio, :itunes_author, :collection_name
    end
  end
end
