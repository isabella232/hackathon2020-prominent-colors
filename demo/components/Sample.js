import { Fragment } from "react";

const Swatch = ({ data, name }) => (
  <div className="swatch">
    <p className="swatch__name">{name}:</p>
    <div className="swatch__color" style={{ backgroundColor: data.hex }} />
  </div>
);

const Sample = ({ data }) => (
  <Fragment>
    <div className="sample">
      <div className="sample__image">
        <img
          src={`http://media.vogue.co.uk/photos/${data.id}/master/w_${data.width}%2cc_limit`}
        />
      </div>
      <div className="sample__palette">
        <Swatch data={data.palette["Vibrant"]} name="Vibrant" />
        <Swatch data={data.palette["LightVibrant"]} name="Vibrant Light" />
        <Swatch data={data.palette["DarkVibrant"]} name="Vibrant Dark" />
        <Swatch data={data.palette["Muted"]} name="Muted" />
        <Swatch data={data.palette["LightMuted"]} name="Muted Light" />
        <Swatch data={data.palette["DarkMuted"]} name="Muted Dark" />
      </div>
    </div>

    <style jsx global>{`
      .sample {
        display: flex;
        flex-wrap: wrap;
      }

      .sample .sample__image {
        width: 50%;
      }

      .sample .sample__image img {
        width: 100%;
      }

      .sample .sample__palette {
        width: 50%;
      }

      .swatch {
        padding: 1vw;
      }

      .swatch__name {
        margin: 0;

        font-size: 4vw;

        width: 60%;
      }

      .swatch__color {
        width: 50%;
        padding-top: 25%;
      }
    `}</style>
  </Fragment>
);

export default Sample;
