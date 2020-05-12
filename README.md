# Technology radar

This visualization shows my personal view on the area, my skills and directions in which I intend to develop.

## Local Development

1. install dependencies with yarn (or npm):

```bash
yarn install
```

2. start local dev server:

```bash
yarn dev
```

3. your default browser should automatically open and show the url: http://localhost:3000/


## Deployment


1. configure deployment url

```bash
export PUBLIC_URL=https://tilm4nn.github.io/tech-radar/
```

2. build

```bash
yarn lint
yarn build
```


## History

- 2020.0.1
   - personalization
   - cleaned up quadrant definition
   - cleaned up ring filtering
   - added skill definition and filtering
   
Build on [yaneek's tech-radar](https://github.com/yaneek/tech-radar).
- Thanks yaneek for enhancing the original radar with
   - extracted tens of visualization functions
   - added React library to render filters & footer
   - build based on [react-create-app](https://github.com/facebook/create-react-app)
   - deployment on Github pages with Travis
   - enabled Typescript support

Build on [Zalando's tech-radar](https://github.com/zalando/tech-radar).
- Thanks to Zalando's team for their code.
   - Base project was completely refactored but visualization concepts still exists :)

   

