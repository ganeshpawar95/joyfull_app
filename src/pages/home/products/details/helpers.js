import { IMAGE_BASE_URL } from "../../../../utils/constants";

export function get_certificate_color(data, image) {
  var tmp = [];

  data.map((master) => {
    tmp.push({
      value: master.name,
      label: (
        <div className="cursor-pointer">
          <div className="mt-3">
            <img
              style={{ borderColor: master.name }}
              className={`h-32 w-32 rounded-md border-3 border-${master.name}-500`}
              src={IMAGE_BASE_URL + image}
              alt=""
              width={100}
              height={100}
            />
            {/* <h4 className='mt-1 text-center text-sm font-semibold text-gray-600'>Green</h4> */}
          </div>
        </div>
      ),
    });
  });
  return tmp;
}

export function capitalizeFirstLetter(name) {
  if (!name) return "";
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
