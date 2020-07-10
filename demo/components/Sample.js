import { Fragment } from "react";

const Sample = ({ data }) => (
  <Fragment>
    <div className="sample">
      <div className="sample__image">
        <img
          src={`http://media.vogue.co.uk/photos/${data.id}/master/w_${data.width}%2cc_limit`}
        />
      </div>
      <div className="sample__palette">
        <div
          className="sample__swatch"
          style={{ backgroundColor: data.palette["Vibrant"].hex }}
        />
        <div
          className="sample__swatch"
          style={{ backgroundColor: data.palette["LightVibrant"].hex }}
        />
        <div
          className="sample__swatch"
          style={{ backgroundColor: data.palette["DarkVibrant"].hex }}
        />
        <div
          className="sample__swatch"
          style={{ backgroundColor: data.palette["Muted"].hex }}
        />
        <div
          className="sample__swatch"
          style={{ backgroundColor: data.palette["LightMuted"].hex }}
        />
        <div
          className="sample__swatch"
          style={{ backgroundColor: data.palette["DarkMuted"].hex }}
        />
      </div>
    </div>

    <style jsx global>{`
      .sample {
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-start;

        margin-bottom: 2rem;
      }

      .sample .sample__image {
        width: 100%;
        flex-grow: 1;
      }

      .sample .sample__image img {
        width: 100%;
        display: block;
      }

      .sample .sample__palette {
        width: 100%;
        flex-grow: 2;

        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: flex-start;
      }

      .sample .sample__swatch {
        width: 100px;
        height: 100px;
      }
    `}</style>
  </Fragment>
);

export default Sample;
