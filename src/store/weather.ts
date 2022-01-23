import create from 'zustand';

type WeatherStore = {
  location: string;
  units: string;
  setLocation: (search: string) => void;
  setUnits: (units: string) => void
}

const useWeatherStore = create<WeatherStore>(set => ({
  location: 'Ho Chi Minh',
  units: 'metrics',
  setLocation: (search: string) =>
    set(() => ({
      location: search
    })),
  setUnits: (unit: string) =>
    set(() => ({
      units: unit
    }))
}))

export default useWeatherStore;