"use client";

const items = [
  {
    id: "1",
    img: "https://picsum.photos/id/1015/600/900?grayscale",
    url: "https://example.com/one",
    height: "h-[180px]",
  },
  {
    id: "2",
    img: "https://picsum.photos/id/1011/600/750?grayscale",
    url: "https://example.com/two",
    height: "h-[140px]",
  },
  {
    id: "3",
    img: "https://picsum.photos/id/1020/600/800?grayscale",
    url: "https://example.com/three",
    height: "h-[220px]",
  },
  {
    id: "4",
    img: "https://picsum.photos/id/1015/600/900?grayscale",
    url: "https://example.com/one",
    height: "h-[180px]",
  },
  {
    id: "5",
    img: "https://picsum.photos/id/1011/600/750?grayscale",
    url: "https://example.com/two",
    height: "h-[140px]",
  },
  {
    id: "6",
    img: "https://picsum.photos/id/1020/600/800?grayscale",
    url: "https://example.com/three",
    height: "h-[220px]",
  },
  {
    id: "7",
    img: "https://picsum.photos/id/1015/600/900?grayscale",
    url: "https://example.com/one",
    height: "h-[180px]",
  },
  {
    id: "8",
    img: "https://picsum.photos/id/1011/600/750?grayscale",
    url: "https://example.com/two",
    height: "h-[140px]",
  },
  {
    id: "9",
    img: "https://picsum.photos/id/1020/600/800?grayscale",
    url: "https://example.com/three",
    height: "h-[220px]",
  },
  {
    id: "10",
    img: "https://picsum.photos/id/1015/600/900?grayscale",
    url: "https://example.com/one",
    height: "h-[180px]",
  },
  {
    id: "11",
    img: "https://picsum.photos/id/1011/600/750?grayscale",
    url: "https://example.com/two",
    height: "h-[140px]",
  },
];

// Manual column assignment like screenshot
const columns = [
  [items[0], items[5], items[10]],    // 3
  [items[1], items[6]],               // 2
  [items[2], items[7], items[9]],     // 3
  [items[3], items[8]],               // 2
  [items[4]],                         // 1
];

const MasonryStatic = () => {
  return (
    <div className="w-full flex justify-center gap-6">
      {columns.map((col, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-6">
          {col.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-[300px] ${item.height} overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-95`}
            >
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MasonryStatic;
