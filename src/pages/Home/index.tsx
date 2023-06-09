import React, { useEffect, useState } from "react";
import Sidebar from "../../components/organisms/sidebar/Sidebar";
import Header from "../../components/layout/header/Header";
import Content from "../../components/layout/content/Content";
import Player from "../../components/molecules/player/Player";
import { useRecoilState } from "recoil";
import { playlistIdState, playlistState } from "../../recoil/playlistAtom";
import { currentSongState, isPlaySongState } from "../../recoil/songAtom";
import { deviceState, volumeState } from "../../recoil/deviceAtom";

const Home: React.FC = () => {
  //   const { data } = useSession();
  const song: any = {};
  const isPlaying: boolean = false;
  const volume: any = {};
  const device: any = {};
  const [playlists, setPlaylists] = useState([]);
  //   const spotifyAPI = useSpotify();
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);
  const [, setPlaylist] = useRecoilState(playlistState);
  const [, setIsPlaying] = useRecoilState(isPlaySongState);

  const [, setCurrentSong] = useRecoilState(currentSongState);
  const [, setVolume] = useRecoilState(volumeState);
  const [, setDevice] = useRecoilState(deviceState);

  const headerProps = {
    avatar: "",
    name: "New user",
  };
  //   useEffect(() => {
  //     if (spotifyAPI.getAccessToken()) {
  //       (async () => {
  //         try {
  //           const response = await spotifyAPI.getUserPlaylists();
  //           setPlaylists(response.body.items);
  //         } catch (error) {}
  //       })();
  //     }
  //   }, [data, spotifyAPI]);

  //   useEffect(() => {
  //     (async () => {
  //       if (playlistId) {
  //         try {
  //           const response = await spotifyAPI.getPlaylist(playlistId);
  //           setPlaylist(response.body);
  //         } catch (error) {}
  //       } else {
  //       }
  //     })();
  //   }, [spotifyAPI, playlistId, data]);
  // useEffect(() => {
  //   (async()=>{
  //     const response = await spotifyAPI.getMyCurrentPlaybackState();
  //     console.log("responseseseseseseseseses",response);
  //   })()
  // }, [spotifyAPI])
  //   useEffect(() => {
  //     if (song) {
  //       setCurrentSong(song);
  //     }
  //   }, [song]);
  //   useEffect(() => {
  //     if (device) {
  //       setDevice(device);
  //     }
  //   }, [device]);
  //   useEffect(() => {
  //     setIsPlaying(isPlaying);
  //   }, [isPlaying]);
  //   useEffect(() => {
  //     setVolume(volume);
  //   }, [volume]);
  const handleClickPlaylist = (id: any) => () => setPlaylistId(id);
  const sidebarProps = {
    playlists,
    handleClickPlaylist,
  };
  const contentProps = {};
  return (
    <div className="bg-black overflow-hidden h-screen scrollbar-hide">
      <main className="flex ">
        <Sidebar {...sidebarProps} />
        <Header {...headerProps} />
        <Content {...contentProps} />
      </main>
      <Player />
    </div>
  );
};
export default Home;
