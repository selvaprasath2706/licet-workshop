export function YouTubeCard({value}) {
  return (
    <div className="w-[400px] bg-amber-300 flex flex-col gap-2">
      <img src={value.thumbNail}></img>
      <div className="flex">
        <img
          className="w-[30px] rounded-4xl"
          src={value.channelLogo}
          alt=""
        />
        <div className="flex flex-col">
          <p>{value.title}</p>
          <p>{value.channelName}</p>
        </div>
      </div>
    </div>
  );
}
