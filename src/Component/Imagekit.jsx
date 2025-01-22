/* eslint-disable react/prop-types */
import { IKImage} from 'imagekitio-react';
export default function Image({src,alt,className,w,h}) {
  return (
    <div>
      <IKImage 
        urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
        path={src}
        className={className}
        loading="lazy"
        lqip={{active:true, quality:20}}
        alt ={alt}
        width={w}
        height={h}
        transformation={[
          {
            "width": w,
            "height": h,
          }
        ]}
      />

     
    </div>
  )
}
