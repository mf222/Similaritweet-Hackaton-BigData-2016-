class SimilarityController < ApplicationController
  def index
  	@data2 = {
      labels: ["Following","Retweets","Descripción"],
      datasets: [
      {
          data: [45, 62, 38],
          labels: "@sonic_hedgehog",
          backgroundColor: ["#cd93b44","#9fbdff","#4c9cce"],
          borderColor: ["rgba(220,220,220,1)","rgba(220,220,220,1)","rgba(220,220,220,1)" ]

      }],

}

@data3 = {
labels: ["Following", "Retweets", "Descripción"],
datasets: [
{
    labels: "@lolomanolo",
    backgroundColor: ["#cd93b44","#9fbdff","#4c9cce"],
    borderColor: ["rgba(220,220,220,1)","rgba(220,220,220,1)","rgba(220,220,220,1)" ],
    data: [65, 96, 65]
}],

}

@data4 = {
labels: ["Following", "Retweets", "Descripción"],
datasets: [
{
    labels: "@mferser",
    backgroundColor: ["#cd93b44","#9fbdff","#4c9cce"],
    borderColor: ["rgba(220,220,220,1)","rgba(220,220,220,1)","rgba(220,220,220,1)" ],
    data: [45, 23, 12]
}],

}
options = {}
  end
end
