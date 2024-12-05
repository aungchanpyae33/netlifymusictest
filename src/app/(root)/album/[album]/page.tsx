import AudiosContainer from "@/ui/albumContainer/Album";
// import Track from "@/ui/trackComponent/Track";

const url = [
  {
    url: "https://curious-lolly-2c34b5.netlify.app/api/https://s3.tebi.io/do90/init.mp4",
    sege: 24,
    name: "with cache header and cache manual",
    duration: 239.467,
  },
  {
    url: "https://curious-lolly-2c34b5.netlify.app/api1?with=https://s3.tebi.io/do90/init.mp4",
    sege: 24,
    name: "with cache no-store",
    duration: 239.467,
  },
];

async function page(props: { params: Promise<{ album: string }> }) {
  const params = await props.params;
  return (
    <div>
      <AudiosContainer url={url} description={params.album} />
    </div>
  );
}

export default page;
