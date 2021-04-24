export default class PlayerService {
    links = {
        "Sao Paulo": "WcjGyIjHLDA",
        "New York": "MeZ8P73JNtw",
    };
    cities = ["Sao Paulo", "New York"];
    speed = 0.5;
    opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
            fs: 0,
            disableKeyboard: 1,
            controls: 0,
            showinfo: 0,
            modestbranding: 0,
            rel: 0,
            mute: 1,
            playsinline: 1,
        },
    };

    selectedCity;
    // setSelectedCity;
    // setOverlayVisible;

    setData(setSelectedCity, setOverlayVisible, selectedCity) {
        this.setSelectedCity = setSelectedCity;
        this.selectedCity = selectedCity;
        this.setOverlayVisible = setOverlayVisible;
    }

    onPlay() {
        console.log(this);
        setTimeout(() => {
            this.setOverlayVisible(false);
        }, 3100)
    }

    onEnd() {
        let nextCityIndex = this.cities.findIndex(city => city === this.selectedCity) + 1
        if (nextCityIndex > this.cities.length) {
            nextCityIndex = 0;
        }
        this.setSelectedCity(this.cities[nextCityIndex])
        this.setOverlayVisible(true);
    }

    cityChanged(event) {
        this.setOverlayVisible(true);
        this.setSelectedCity(event.target.value);
    }

}