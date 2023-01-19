const OUR_BUSINESS = {
  modeling: {
    businessName: "3Dコンテンツ制作",
    businessNameEn: "3D Modeling",
    businessPageName: "3dcg",
    businessDescription: ["フォトリアル調のCGやゲーム開発に使えるような3Dモデルを制作します。"],
  },
  system: {
    businessName: "Web開発",
    businessNameEn: "Web Development",
    businessPageName: "system",
    businessDescription: ["Webアプリケーションの開発やWebサイトを製作します。"],
  },
  game: {
    businessName: "ゲーム開発",
    businessNameEn: "Game Production",
    businessPageName: "game",
    businessDescription: ["2D、3DのWebブラウザゲーム、ネイティブゲームを制作します。"],
  },
};

const CONTENTS = {
  aboutUs: {
    contentsName: "AboutUs",
    anchor: "aboutus",
  },
  works: {
    contentsName: "Works",
    anchor: "works",
  },
  contact: {
    contentsName: "Contact",
    anchor: "contact",
  },
};

export default new (class ourBiz {
  getBusiness() {
    return OUR_BUSINESS;
  }

  getContents() {
    return CONTENTS;
  }
})
