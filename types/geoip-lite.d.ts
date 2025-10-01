declare module "geoip-lite" {
  type GeoLookup = {
    range?: [number, number];
    country?: string;
    region?: string;
    eu?: "0" | "1";
    timezone?: string;
    city?: string;
    ll?: [number, number];
    metro?: number;
    area?: number;
  } | null;

  const geoip: {
    lookup(ip: string): GeoLookup;
  };
  export default geoip;
}


