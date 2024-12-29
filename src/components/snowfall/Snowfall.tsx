"use client";

import "./Snowfall.scss";
import ReactSnowfall from "react-snowfall";

const SNOWFLAKE1 = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><path fill="#fff" fill-rule="evenodd" d="M11.159 3.292c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305L17.7 14.564l1.257 5.273c.27 1.136-.964 2.033-1.96 1.425l-4.627-2.826-4.627 2.826c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006Z" clip-rule="evenodd"/></svg>`;
const SNOWFLAKE2 = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><g clip-path="url(#a)"><path fill="#fff" d="M20.27 15.904a.588.588 0 0 0-.98.107l-.175.32-1.042-.638 1.574-1.068a.669.669 0 0 0 .185-.891.588.588 0 0 0-.84-.196l-2.038 1.383-1.51-2.19 1.528-2.214 1.996 1.446a.582.582 0 0 0 .342.112.598.598 0 0 0 .503-.28.67.67 0 0 0-.16-.898l-1.608-1.166 1.07-.655.2.365a.606.606 0 0 0 .526.323c.174 0 .34-.08.457-.22l2.049-2.473c.173-.208.2-.51.069-.75a.596.596 0 0 0-.65-.307l-3.03.67a.617.617 0 0 0-.431.368.68.68 0 0 0 .028.586l.174.32-1.042.638-.084-1.98c-.016-.356-.3-.631-.635-.615-.336.016-.596.317-.58.673l.108 2.536-2.584.299-1.024-2.465 2.137-1.176a.665.665 0 0 0 .26-.87.616.616 0 0 0-.842-.275l-1.68.912V4.387h.393c.336 0 .608-.286.608-.642a.663.663 0 0 0-.046-.244L12.542.432A.6.6 0 0 0 11.967 0h-.002a.602.602 0 0 0-.576.427l-.995 3.109a.678.678 0 0 0 .082.582c.115.17.298.27.494.27h.354V5.67L9.59 4.775c-.303-.155-.655-.02-.8.302a.665.665 0 0 0 .29.861l2.132 1.085-1.031 2.486-2.48-.287.11-2.533c.015-.356-.245-.658-.58-.674-.335-.014-.62.26-.635.615L6.51 8.61l-1.018-.623.174-.32a.68.68 0 0 0 .028-.586.617.617 0 0 0-.43-.368l-3.03-.67a.595.595 0 0 0-.65.306.676.676 0 0 0 .068.75l2.05 2.474a.593.593 0 0 0 .516.217.606.606 0 0 0 .467-.32l.199-.366 1.047.642-1.61 1.166a.67.67 0 0 0-.158.896.598.598 0 0 0 .502.282.581.581 0 0 0 .343-.113l1.932-1.4 1.487 2.155-1.47 2.13-1.974-1.338a.588.588 0 0 0-.84.196c-.18.3-.098.699.185.89l1.574 1.069-1.018.623-.174-.32a.588.588 0 0 0-.98-.107l-2.063 2.45a.676.676 0 0 0-.074.75.603.603 0 0 0 .647.312l3.043-.646a.616.616 0 0 0 .435-.367.68.68 0 0 0-.027-.588l-.2-.366 1.048-.642.147 2.062c.024.339.29.596.606.596a.61.61 0 0 0 .046-.001c.335-.027.586-.337.56-.692l-.178-2.504 2.46-.284 1.024 2.461-2.12 1.081a.663.663 0 0 0-.285.861c.146.321.487.456.79.302l1.734-.895v1.311h-.354a.595.595 0 0 0-.494.267.671.671 0 0 0-.082.58l.994 3.114a.602.602 0 0 0 .576.427h.003a.6.6 0 0 0 .575-.432l.968-3.109a.678.678 0 0 0-.085-.58.598.598 0 0 0-.493-.267h-.392V19.8l1.681.912a.62.62 0 0 0 .29.073c.22 0 .438-.127.546-.349.155-.316.041-.705-.257-.87l-2.126-1.17 1.015-2.44 2.566.295-.18 2.506c-.024.355.227.665.562.692a.564.564 0 0 0 .046.002c.315 0 .582-.258.606-.597l.147-2.061 1.07.655-.198.366a.68.68 0 0 0-.028.589c.081.19.243.326.435.367l3.044.646a.603.603 0 0 0 .647-.312.677.677 0 0 0-.075-.75l-2.062-2.45Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v25.464H0z"/></clipPath></defs></svg>`;
const SNOWFLAKE3 = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><g clip-path="url(#a)"><path fill="#fff" d="m22.193 17.187-1.667-.962 1.71-1.105a.606.606 0 0 0-.658-1.019l-2.233 1.442-.908-.524.908-.676a.606.606 0 0 0-.723-.973l-1.328.989-1.993-1.151-.004-2.41 1.994-1.15 1.427.889a.605.605 0 1 0 .64-1.029l-.878-.547.846-.489 2.254 1.356a.603.603 0 0 0 .832-.208.606.606 0 0 0-.208-.831l-1.678-1.01 1.622-.936a.606.606 0 0 0-.606-1.05l-1.666.962-.102-2.032a.606.606 0 1 0-1.21.06l.132 2.653-.91.526-.13-1.125a.606.606 0 1 0-1.204.14l.191 1.645-1.977 1.133-2.135-1.234V6.263l1.534-.656a.609.609 0 0 0 .322-.797.618.618 0 0 0-.806-.316l-1.05.449v-1.05L14.91 2.68a.608.608 0 0 0 .27-.816.618.618 0 0 0-.826-.263l-1.822.928V.606a.606.606 0 1 0-1.212 0V2.48l-1.7-.948a.598.598 0 0 0-.816.236.603.603 0 0 0 .226.824l2.29 1.274v.976l-.9-.487a.598.598 0 0 0-.813.25.603.603 0 0 0 .24.82l1.473.791V8.56L9.272 9.735 7.35 8.62l.195-1.644a.605.605 0 1 0-1.201-.14l-.131 1.124-.91-.525.133-2.653a.606.606 0 1 0-1.21-.06l-.102 2.032-1.666-.962a.606.606 0 1 0-.606 1.05l1.622.936-1.678 1.01a.606.606 0 0 0 .624 1.038l2.254-1.355.846.488-.879.548a.606.606 0 1 0 .641 1.028l1.427-.889 1.972 1.138.004 2.431-1.979 1.142-1.328-.988a.606.606 0 0 0-.723.973l.908.675-.91.525-2.23-1.441a.606.606 0 0 0-.659 1.016l1.713 1.105-1.67.964a.606.606 0 1 0 .606 1.05l1.623-.937.034 1.95a.6.6 0 0 0 .606.588h.011a.596.596 0 0 0 .595-.61l-.046-2.621.845-.488.035 1.035a.606.606 0 0 0 1.212-.041l-.057-1.681 2.015-1.171 2.033 1.186v2.338l-1.47.791a.604.604 0 0 0-.243.82c.11.205.322.321.539.321a.56.56 0 0 0 .273-.071l.901-.488v.977l-2.286 1.274a.604.604 0 0 0-.23.824c.11.2.32.312.534.312a.56.56 0 0 0 .281-.076l1.701-.948v1.873a.606.606 0 1 0 1.212 0V21.47l1.825.928c.298.152.67.035.822-.263a.61.61 0 0 0-.272-.816l-2.375-1.212v-1.05l1.053.449a.614.614 0 0 0 .804-.316.61.61 0 0 0-.327-.797l-1.53-.656v-2.252l2.163-1.22 2.028 1.167-.053 1.68a.607.607 0 0 0 .587.627h.022a.606.606 0 0 0 .606-.585l.035-1.035.845.488-.046 2.622c-.006.335.26.61.595.61h.01a.6.6 0 0 0 .607-.589l.034-1.95 1.623.936a.603.603 0 0 0 .828-.221.606.606 0 0 0-.222-.828Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>`;

export default function Snowfall() {
  const loadSVGImage = (svg: string): HTMLImageElement => {
    const img = new Image();
    img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
    return img;
  };

  const images = [
    loadSVGImage(SNOWFLAKE1),
    loadSVGImage(SNOWFLAKE2),
    loadSVGImage(SNOWFLAKE3),
  ];

  return (
    <div className="snowfall">
      <ReactSnowfall
        images={images}
        radius={[2, 24]}
        speed={[0.1, 0.5]}
        wind={[0, 0.4]}
        opacity={[0.1, 0.8]}
      />
    </div>
  );
}
