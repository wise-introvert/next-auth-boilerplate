import { type MouseEvent, type ChangeEvent, useState, useEffect } from "react";
import Head from "next/head";
import type {
  GetServerSidePropsResult,
  GetServerSideProps,
  GetServerSidePropsContext,
} from "next";
import axios, { type AxiosResponse } from "axios";
import { useSession } from "next-auth/react";
import { type Session, unstable_getServerSession } from "next-auth";
import { get } from "lodash";
import NextImage from "next/image";
import { signIn, signOut } from "next-auth/react";

import { authOptions } from "./api/auth/[...nextauth]";

export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    console.log({ session });
  }, [session]);

  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <meta
          name="description"
          content="NextJS, Prisma & NextAuth boilerplate."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav
          style={{
            position: "fixed",
            top: "0",
            height: "64px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            padding: "1rem 10vw",
            background: "rgba(0, 0, 0, 0.05)",
            backdropFilter: "blur(4px)",
            color: "black",
            borderBottom: "solid 1px rgba(255, 255, 255, 0.5)",
            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <span
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              fontFamily: "Major Mono Display",
            }}
          >
            Brand
          </span>
          {session ? (
            <NextImage
              onClick={() => signOut()}
              height={48}
              width={48}
              style={{
                borderRadius: "50%",
              }}
              alt={"avatar"}
              src={get(session, "user.image", "")}
            />
          ) : (
            <button
              style={{
                outline: "none",
                border: "1px solid black",
                borderRadius: ".15rem",
                padding: ".2rem 1.25rem",
                background: "transparent",
                fontWeight: "bold",
              }}
              onClick={() => signIn()}
            >
              Sign in
            </button>
          )}
        </nav>
      </header>
      <main
        style={{
          height: "100vh",
          width: "100vw",
          padding: "1rem 10vw",
        }}
      >
        <p style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          hendrerit tortor eu blandit eleifend. Phasellus gravida in nisi id
          accumsan. Cras sollicitudin venenatis auctor. Sed at mollis ipsum.
          Nunc mauris mi, luctus quis fringilla in, semper ut turpis. Fusce
          fermentum porta eros. In hac habitasse platea dictumst. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Donec augue magna,
          accumsan sed nulla sodales, ullamcorper consectetur erat. Donec
          varius, urna vitae ultricies viverra, purus eros consectetur purus,
          vel efficitur ante metus vitae diam. Praesent auctor nunc nisi, vel
          interdum urna accumsan eget. Pellentesque velit felis, pretium non
          augue eget, tempor molestie lectus. Nam nec tellus ac enim consequat
          pulvinar.{" "}
          <h2>
            Ut mollis, eros id faucibus bibendum, sem lorem auctor diam, vel
            efficitur enim nisl sed est. Suspendisse at lectus sed libero
            elementum volutpat at et felis.
          </h2>{" "}
          Sed a sodales ex, ac tincidunt sem. Nunc massa lectus, accumsan nec
          magna sed, finibus condimentum orci. Maecenas sem nunc, consectetur in
          laoreet non, finibus id felis. Pellentesque ut lacus sed elit maximus
          cursus. Aliquam suscipit neque nec euismod tempor. Suspendisse nec
          viverra sapien. Cras scelerisque blandit dolor, quis viverra lacus
          volutpat in. Praesent dignissim nec velit nec interdum. Integer
          sodales quis diam sit amet sagittis. Donec convallis aliquam dolor sed
          convallis. Aliquam eu lacus sodales dolor placerat condimentum nec sit
          amet eros. Cras elementum eros erat, porta laoreet lectus porttitor
          eget. Curabitur mattis mi id leo facilisis fringilla. Donec eget
          tincidunt ipsum. In aliquam nisl lacus, at pellentesque felis maximus
          ac. Quisque at lorem in lectus auctor malesuada in sit amet neque.
          Donec eu libero diam. In a est vitae libero ultricies accumsan a ac
          nisi. Nam et libero urna. Suspendisse potenti. Ut sed nunc id arcu
          fringilla consequat. Suspendisse vestibulum orci eu purus blandit
          venenatis at ut ex. Suspendisse mollis dignissim arcu. Phasellus eu
          ornare elit. Ut euismod dictum ultricies. Proin id rhoncus tellus, sed
          condimentum ex. Nullam auctor nisl nunc, sed congue nisi varius a. In
          hac habitasse platea dictumst. Pellentesque dictum urna tempor diam
          vehicula, ac accumsan tellus eleifend. Aenean efficitur ipsum sit amet
          velit vulputate, sit amet vulputate dui feugiat. In hac habitasse
          platea dictumst. Nulla a enim purus. Nam orci dui, porta sit amet
          auctor nec, elementum ut ex. Integer sit amet sapien volutpat,
          ultrices nisl in, lacinia turpis. Aenean sodales tincidunt maximus. Ut
          convallis ornare neque ut bibendum. Proin ut euismod augue. Etiam
          mollis malesuada orci, at vehicula tortor rhoncus sit amet. Proin nec
          nisi justo. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Fusce euismod sem id posuere
          consectetur. Aliquam vel dui vel lorem sodales suscipit. Integer
          tristique faucibus odio, vitae elementum odio fringilla sit amet. Sed
          nunc lorem, tempus a lorem id, bibendum malesuada arcu. Donec magna
          diam, lobortis maximus consequat quis, ultrices ac enim. Donec eget
          hendrerit tortor, id rutrum urna. Aenean in justo et velit placerat
          pretium nec vitae eros. Suspendisse ultrices sagittis leo nec
          vehicula. Duis risus enim, rutrum ut tristique ut, tincidunt nec
          felis. Nam interdum tincidunt turpis, a efficitur orci iaculis sit
          amet. Maecenas convallis justo nibh, vel ultricies lacus consequat eu.
          Sed iaculis faucibus sem, imperdiet blandit erat blandit vel. Praesent
          placerat gravida sem vitae ullamcorper. Sed feugiat metus eget
          ultrices efficitur. Pellentesque sed purus a lectus dignissim volutpat
          vitae vitae est. Nullam ullamcorper, risus sit amet rhoncus ultricies,
          elit leo ullamcorper ligula, vel fermentum est velit at mauris.
          Aliquam venenatis erat vitae ornare fringilla. Pellentesque elementum
          libero sem, id feugiat metus molestie sit amet. Nullam tellus enim,
          ultrices fringilla lectus eget, semper commodo nunc. Mauris et turpis
          dolor. Aenean laoreet neque quis mauris scelerisque rutrum suscipit
          blandit mi. Aliquam at efficitur libero, sed dictum lacus. Suspendisse
          pretium commodo viverra. Nam dapibus nisi leo, eu maximus sem
          ullamcorper sed. Aenean diam orci, mollis aliquet condimentum non,
          euismod ac risus. Quisque sed nibh condimentum enim eleifend dictum
          finibus sollicitudin ante. Cras egestas purus purus, sit amet posuere
          leo feugiat ut.
          <h2>Mauris lorem odio, laoreet a arcu ac,</h2> dictum euismod sapien.
          Phasellus blandit sapien in nunc venenatis, a tempus eros eleifend.
          Nulla facilisi. Praesent mattis vel libero ac imperdiet. Duis sed
          tellus fringilla sapien dictum venenatis. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae;
          Pellentesque auctor mattis felis, eu malesuada nibh fringilla vel.
          Nunc aliquet in nulla non varius. Suspendisse maximus lorem non
          ultricies rutrum. Nunc arcu ipsum, aliquet a faucibus eu, semper vitae
          quam. Maecenas aliquet leo eget hendrerit congue. Sed nulla tortor,
          pretium accumsan justo in, dapibus molestie mi. Phasellus sodales eu
          nunc et pretium. Ut imperdiet felis id risus pretium, vel ultricies
          neque scelerisque. Cras sit amet pulvinar augue, in vestibulum eros.
          Curabitur id ex quis tellus dignissim tempus. Aliquam quis faucibus
          nisi. Praesent non magna odio. Quisque faucibus pretium diam ut
          bibendum. Donec sodales ultrices varius. Pellentesque ac dui
          consectetur, commodo urna interdum, suscipit justo. Sed cursus
          tincidunt maximus. Curabitur id nisl eu est pretium pellentesque ut
          sit amet magna. Nulla ac ultrices nisi. Vivamus ornare semper orci
          quis accumsan. In a massa sagittis, placerat leo vel, laoreet erat.
          Morbi iaculis odio ut libero porttitor, vel feugiat nulla semper. Nunc
          egestas pretium mi, sed dignissim erat dictum nec. Aliquam dignissim
          eget libero nec laoreet. Donec sagittis, nisl a rutrum porta, quam
          felis dictum ante, eu luctus odio quam vel ligula. Cras magna dui,
          commodo a porttitor ut, placerat eu turpis. Nam porta viverra
          consequat. Ut dui enim, tempus quis tincidunt a, semper nec turpis.
          Maecenas ullamcorper metus mauris, at elementum libero cursus vel. Sed
          faucibus feugiat vulputate. Proin egestas facilisis eros, sit amet
          facilisis tortor interdum ut. Donec in posuere risus, a eleifend
          risus. Vivamus eu justo vulputate ex mattis eleifend quis non est. Sed
          quis augue pulvinar, commodo libero non, venenatis turpis. Curabitur
          volutpat luctus feugiat. Mauris scelerisque elementum pretium.
          Suspendisse luctus congue tellus, id commodo dolor ullamcorper et.
          Quisque nec nunc tincidunt, ornare lacus id, malesuada neque. Mauris
          pretium urna velit, a semper turpis mattis vitae. In maximus tortor in
          erat elementum sollicitudin. In vel orci volutpat, dignissim magna in,
          viverra neque.{" "}
          <h2>
            Curabitur pretium nisi non porta lacinia. Fusce maximus ex at ligula
            varius, sit amet consequat metus viverra. Curabitur at auctor metus.
            Donec nibh nibh, eleifend suscipit pretium eu, finibus egestas est.
            Nam ut lorem sagittis, efficitur arcu in, fringilla nisi. Morbi quis
            turpis eget libero pretium aliquet eget sed lectus. Pellentesque sit
            amet purus consequat, porttitor augue posuere, pulvinar ligula.
            Nulla non eros sit amet nunc volutpat vestibulum. Sed mollis nibh a
            aliquet cursus. Donec libero libero, facilisis a semper quis,
            tincidunt sed neque.
          </h2>{" "}
          Maecenas hendrerit dui at dui maximus convallis. Cras vel risus velit.
          Sed nisi massa, vulputate vel tortor eget, dignissim interdum enim.
          Nunc porttitor tortor nunc, et elementum turpis maximus vitae.
          Phasellus sit amet vehicula lacus. Etiam placerat nisl eu ex dapibus
          volutpat. Morbi quis suscipit purus, at sagittis arcu. Morbi iaculis
          malesuada sem eu semper. Integer mattis id neque ac efficitur. Donec
          ut mattis lacus. Donec ut semper mi. Praesent quis condimentum nunc.
          Proin ultrices imperdiet magna, mollis facilisis quam porttitor eget.
          Fusce eu molestie nulla, in accumsan urna. Proin cursus viverra ex,
          quis interdum risus varius in. Etiam accumsan elementum ligula vitae
          venenatis. Suspendisse nec rhoncus elit, eget placerat diam. Etiam
          rhoncus, mauris porta suscipit viverra, nulla neque sodales odio, at
          porta est odio at nunc. Nunc semper ex sapien, id interdum turpis
          vestibulum ut. Etiam ut est vitae dolor faucibus rutrum. Mauris
          pharetra sodales semper. Proin sollicitudin, urna convallis congue
          faucibus, elit eros laoreet velit, ut interdum odio augue id sem.
          Quisque a est at turpis dignissim commodo at sed nisl. Praesent ut
          semper diam. Aliquam sit amet tempor mauris. Pellentesque et auctor
          dui. Mauris metus elit, fermentum laoreet massa ut, congue interdum
          nisi. Donec ut luctus purus. Etiam faucibus dui et vestibulum
          suscipit. Nunc a tempus velit. Nam tincidunt euismod dignissim. In
          iaculis, libero sit amet maximus congue, elit eros facilisis turpis,
          vehicula bibendum velit sapien id ante. Nam in nisi nec elit finibus
          blandit sit amet quis nibh. Phasellus vulputate tincidunt quam, id
          auctor felis pretium eu. Nam a risus aliquam augue rhoncus ultricies.
          Nam imperdiet turpis ac arcu vulputate tincidunt. Fusce est nulla,
          ultrices vitae erat sit amet, feugiat fringilla lectus. Etiam dapibus
          diam a massa iaculis accumsan. Nullam condimentum ex eget orci mollis
          pellentesque. Etiam ultricies hendrerit augue ut elementum. Phasellus
          hendrerit accumsan lorem, nec cursus ante congue et. Phasellus eget
          blandit ligula. Phasellus eget molestie est. Fusce interdum lorem non
          nisi posuere porta. Fusce in dolor in libero condimentum varius at non
          ligula. Morbi libero urna, vehicula at varius in, luctus ac nulla. Ut
          mollis, arcu id congue cursus, purus lectus tincidunt lorem, quis
          blandit ex justo nec enim. Cras feugiat massa ut purus lacinia
          fringilla. Nulla blandit sollicitudin sodales. Fusce eu quam ac ante
          placerat porta. Nam a velit magna. Proin porttitor mi quis erat
          feugiat, a finibus purus scelerisque. Curabitur dignissim fringilla
          venenatis. Ut scelerisque posuere consequat. Quisque maximus justo
          vitae egestas congue. Duis laoreet tortor in nisl sollicitudin
          rhoncus. Proin cursus nunc ut posuere efficitur. Praesent ultrices
          sollicitudin mollis. Aliquam erat volutpat. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Pellentesque ultricies, massa imperdiet aliquet posuere,
          ligula diam sodales massa, id laoreet sapien diam id mauris.
          Suspendisse id ipsum porttitor, feugiat dolor id, dapibus neque. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Sed pellentesque non libero nec rhoncus.
          Suspendisse gravida id quam id imperdiet. Nam facilisis gravida
          auctor. In vehicula consectetur erat. Phasellus lacinia magna ut
          tincidunt ultrices. Praesent luctus odio elit, quis condimentum eros
          condimentum et. Aliquam accumsan nunc et odio tristique, quis
          imperdiet massa tincidunt. Integer faucibus velit sed diam condimentum
          ultricies. Sed ut lorem ipsum. Phasellus sodales, nisl eget maximus
          dapibus, ligula tortor elementum purus, vel luctus arcu turpis eget
          nisl. Fusce bibendum eros ante. Maecenas cursus risus vehicula turpis
          pellentesque finibus. Pellentesque mollis dignissim leo, vel porta
          dolor fermentum id. Sed ipsum leo, tincidunt sit amet est a, accumsan
          aliquam purus. Pellentesque non erat nec augue condimentum varius non
          aliquam quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec et pellentesque felis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec in velit diam. Proin eu odio vitae est accumsan
          semper consectetur ut orci. Vestibulum at tellus sed purus lobortis
          vestibulum vitae vel dolor. Integer consequat tempus erat, at
          hendrerit nisl pharetra eget. Ut in turpis quis turpis faucibus
          condimentum. Nunc ornare elit lectus, in consequat lacus sodales at.
          Donec vitae consectetur ex. Vestibulum vel dictum elit, in pretium
          nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          elementum molestie mauris, in tempus elit. Proin condimentum tellus ac
          <h1>
            {" "}
            porta suscipit. Curabitur feugiat elementum sodales. Donec lectus
            dui, ultricies quis hendrerit ultrices, tincidunt id felis.
            Phasellus consequat nulla eget augue consequat, in posuere erat
            suscipit. Nullam vel purus nec risus ullamcorper maximus.
            Suspendisse tincidunt ullamcorper est, quis vulputate orci pulvinar
            ut. Quisque nec erat maximus lectus ultricies blandit. Maecenas sit
            amet leo vel dolor vehicula consequat. Sed ornare lobortis eleifend.
            Vivamus faucibus nisi at sem commodo, non posuere tortor vulputate.
            Aenean finibus aliquam rhoncus. In id cursus mauris. Donec vehicula
            massa sodales, hendrerit nisl a, dictum enim. Nam sodales vehicula
            justo vel ultrices. Nunc faucibus, orci interdum molestie gravida,
            enim velit tincidunt est, ac pharetra ex sem ut tortor. Pellentesque
            luctus neque nulla, eget cursus tortor laoreet consectetur. Donec
            lectus felis, aliquet non mattis eget, pharetra vitae nunc. Aliquam
            aliquet neque eget pellentesque euismod. Quisque imperdiet hendrerit
            nibh vitae tincidunt. Mauris feugiat, enim vel accumsan efficitur,
            dolor quam fermentum neque, sit amet lacinia lorem justo vel arcu.
            Suspendisse aliquet felis nec sagittis condimentum. Nulla velit
            enim, tincidunt non nulla id, maximus condimentum ex. Phasellus
            finibus consequat nisi, vitae imperdiet lorem luctus et. Aliquam
            feugiat nulla eu nisl laoreet commodo.{" "}
          </h1>
          Fusce luctus ac massa vitae aliquam. Phasellus nunc tellus, sodales
          non enim auctor, feugiat consequat metus. Nulla facilisi. Morbi
          dignissim turpis viverra, bibendum nisi at, dapibus sapien. Cras
          tortor elit, dapibus ut pellentesque vel, commodo sit amet lacus.
          Maecenas at nisl auctor lectus tempus congue sodales ac nisi. Donec
          placerat arcu malesuada ultricies pretium. Sed sit amet consequat
          eros. Vestibulum in turpis a urna maximus consequat. Quisque consequat
          massa ipsum, ut feugiat neque eleifend et. Cras molestie laoreet erat,
          nec laoreet nisl maximus a. Phasellus dignissim ipsum vel ipsum
          ultrices laoreet. Ut maximus aliquet dui, quis aliquam nisi maximus
          id. Vestibulum lectus tellus, euismod vitae eros ut, vulputate
          venenatis lorem. Fusce efficitur ante sed ipsum commodo, eget pharetra
          turpis mollis. Nunc ultrices tristique ex. Vestibulum eleifend mi sed
          aliquam rutrum. Suspendisse magna ipsum, eleifend sed vulputate eget,
          pellentesque ac nibh. Maecenas sed aliquam ex, tincidunt volutpat
          ante. Phasellus vitae dui lorem. Aliquam condimentum nec risus et
          malesuada. Suspendisse pharetra tempus sem sit amet ornare. Aenean
          fermentum leo sem, in feugiat ipsum cursus eget. Integer vitae nunc
          non dui convallis rutrum. Donec malesuada metus massa, non
          sollicitudin leo faucibus id. Mauris congue dignissim commodo.
          Curabitur imperdiet nisi eu purus egestas bibendum. Mauris quis
          viverra enim, tempus vehicula eros. Proin aliquam dolor urna, nec
          venenatis ligula varius vitae. Vestibulum sed interdum sapien. Nulla
          auctor felis at odio faucibus pharetra. Aenean facilisis molestie
          finibus. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Curabitur leo arcu, blandit eget erat
          ut, tincidunt scelerisque elit. Maecenas mollis nibh ex, sed feugiat
          nulla ornare vel. Nam nunc arcu, pellentesque a malesuada at,
          vestibulum id enim. Donec scelerisque risus lectus, at volutpat diam
          venenatis in. Quisque nec ipsum sagittis, egestas velit quis,
          sollicitudin velit. Pellentesque faucibus est lacus, in laoreet libero
          dignissim at. Donec eu convallis lorem, nec finibus velit. Nunc ac mi
          elit. Aliquam fringilla, orci dictum accumsan dignissim, sapien mi
          luctus urna, et tincidunt sapien risus ac ipsum. Etiam ac pellentesque
          lacus. In sollicitudin commodo massa ut tempor. Ut lectus lorem,
          faucibus sed gravida nec, euismod vitae erat. Fusce felis tellus,
          elementum non condimentum in, hendrerit id ante. Etiam nibh libero,
          ultrices ac felis sit amet, vehicula accumsan leo. Maecenas
          sollicitudin placerat dui eget fringilla. Cras et dictum augue, nec
          cursus leo. Aliquam consectetur erat arcu, in dignissim odio vulputate
          vitae. Aenean vitae auctor est. Maecenas ligula nisl, pulvinar in
          magna sit amet, ullamcorper volutpat mi. Mauris accumsan congue
          viverra. Sed accumsan sit amet sem vitae fringilla. Sed efficitur
          justo a libero euismod malesuada. Integer consectetur, arcu vel
          maximus dictum, nunc magna sagittis leo, sed accumsan ex est vel est.
          Donec nec ullamcorper orci. Integer ac nulla purus. Ut scelerisque
          quis est nec pharetra. Donec ut hendrerit sem. Cras facilisis euismod
          enim, at ultricies risus aliquet ac. Proin metus libero, pharetra ac
          feugiat vel, tristique et nisl. Nam mattis, augue sed condimentum
          consectetur, ipsum turpis facilisis sem, quis sollicitudin mauris leo
          ut nisi. Proin malesuada vehicula sapien eget interdum. In vel nibh
          elit. Aenean faucibus porttitor neque a convallis. Proin ut elementum
          dolor, ultrices convallis libero. Morbi rutrum, lacus non accumsan
          luctus, erat mi rutrum enim, vel interdum sem nisl nec sapien. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet
          velit sit amet neque luctus pharetra a sed dolor. Nunc non velit
          varius, faucibus neque a, fermentum massa. Aenean eu sollicitudin
          metus. Aenean in risus sed ligula ullamcorper fermentum id a magna.
          Maecenas nec lacinia elit. Proin semper dolor enim, vitae eleifend sem
          aliquam eu. Praesent nec dapibus neque. Praesent molestie viverra dui
          ac interdum. Mauris arcu nisi, imperdiet ac cursus quis, sollicitudin
          nec libero. Donec vel metus in metus porta semper. Morbi hendrerit
          aliquet tempus. Quisque a ultricies magna, nec commodo neque.
          Curabitur augue dolor, accumsan eget commodo ac, scelerisque mollis
          dolor. Curabitur non risus non velit tincidunt sagittis. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Etiam ac vulputate velit,
          at dapibus neque. Vestibulum sit amet nunc pharetra, mollis mi ac,
          dignissim ante. Aliquam a massa neque. Nulla vitae accumsan arcu.
          Vivamus semper id leo nec ullamcorper. Ut mollis ornare nisi, ut
          tempus tortor vehicula quis. Sed sodales metus in leo sollicitudin
          pellentesque. Nam ac lorem sed velit pellentesque maximus vitae nec
          diam. Donec in mauris vestibulum, vulputate orci at, imperdiet lectus.
          Integer rhoncus suscipit nisi ac pulvinar. Duis sit amet orci
          placerat, maximus est id, bibendum risus. Proin molestie auctor
          imperdiet. Suspendisse urna sem, iaculis commodo condimentum
          elementum, sollicitudin sed lorem. Suspendisse id tincidunt massa. Nam
          id metus nibh. Integer molestie urna ut iaculis auctor. Donec tempus
          quis massa ut volutpat. Mauris facilisis urna sit amet ante suscipit,
          ut finibus risus molestie. Fusce placerat sed ex at rhoncus. Aliquam
          euismod placerat augue, eu mollis nisi laoreet id. In lorem justo,
          fringilla nec porttitor sit amet, laoreet sit amet nisl. Cras
          vestibulum magna id nisl aliquet, a bibendum felis placerat. Sed
          tempus ligula leo, quis bibendum neque ullamcorper et. Mauris
          elementum posuere iaculis. Mauris varius scelerisque tristique. Mauris
          semper, felis sit amet commodo tempor, lectus tortor sagittis augue,
          vitae cursus nisl enim a enim. Pellentesque condimentum elementum
          porttitor. Maecenas malesuada ex id augue malesuada sagittis. Duis
          posuere dolor eu nisi consectetur interdum. Suspendisse sed tincidunt
          felis. Phasellus eget orci tincidunt, sollicitudin lacus ut, fringilla
          mauris. Suspendisse a consequat eros. Duis efficitur porttitor dui,
          venenatis fringilla lacus porta vitae. Suspendisse sed eros nec sapien
          venenatis cursus ut pretium sem. Vivamus tempor ut purus a tristique.
          Nullam id augue velit. Quisque tempus semper massa, at lacinia dui
          tempor in. Fusce ut nisl nec justo elementum ullamcorper vitae sed
          magna. Cras ultricies sagittis enim eu congue. Duis tristique urna sed
          ex facilisis, at laoreet eros accumsan. Duis lorem dolor, euismod id
          nisi sit amet, tristique dignissim leo. Aenean aliquam, ex sed
          convallis consectetur, libero est ullamcorper ligula, non mattis nisl
          risus vitae enim. Nullam non lacus nisi. In rhoncus enim et porttitor
          faucibus. Integer tempus ornare tristique. Nunc tincidunt tincidunt
          arcu, vel pellentesque est laoreet id. Nam pellentesque sollicitudin
          magna, at consectetur dolor semper eu. Pellentesque malesuada faucibus
          risus, placerat faucibus purus commodo eu. Fusce id interdum eros.
          Curabitur scelerisque pharetra dolor ultrices sagittis. Ut sagittis
          malesuada vehicula. Phasellus sed mauris rhoncus, tristique purus vel,
          eleifend odio. Mauris auctor sapien nisi, ut vulputate sem consequat
          et. Praesent consectetur elit velit, id finibus sem tincidunt sit
          amet. Nulla facilisi. Nam dolor dolor, vulputate et lacinia non,
          feugiat nec odio. Mauris tincidunt nec neque at posuere. Nam blandit
          mauris vel arcu efficitur facilisis. Maecenas laoreet sem at
          condimentum dignissim. Aenean quis mauris at justo imperdiet facilisis
          pellentesque sit amet turpis. Sed a turpis nec nibh mattis rutrum.
          Praesent hendrerit, justo nec malesuada faucibus, lectus tellus
          volutpat lectus, at blandit mi augue at purus. Nunc facilisis lectus a
          sapien suscipit, at imperdiet tortor facilisis. Sed nec pharetra
          neque. Nullam sed cursus est, non venenatis risus. Sed aliquam risus
          in nisl mattis, vitae egestas eros dapibus. Sed cursus varius eros, id
          laoreet tellus tempus ut. Morbi laoreet eleifend metus, vitae interdum
          arcu dapibus in. Curabitur lacinia accumsan ipsum, quis egestas arcu
          viverra sit amet. Etiam nec sagittis magna. Nullam volutpat urna id
          diam condimentum sollicitudin. Donec accumsan dui et lectus rutrum
          posuere. Cras eleifend ante eu augue tempor, id laoreet odio ultrices.
          Proin interdum euismod vulputate. Nullam consequat vestibulum sem sit
          amet interdum. Sed orci erat, pretium nec leo non, tincidunt pharetra
          magna. Curabitur sit amet tincidunt neque. Vestibulum ac ligula id
          eros cursus iaculis quis sit amet ipsum. Vivamus justo erat, euismod
          at dolor ut, imperdiet pretium eros. Vestibulum ullamcorper et libero
          sit amet sagittis. Cras vel nibh elementum, finibus nisl non,
          vulputate orci. Nulla hendrerit, arcu vitae imperdiet tristique, nisl
          leo ultricies justo, sit amet eleifend odio augue vel elit. Sed elit
          sem, aliquam eu tortor non, venenatis ullamcorper ante. Nam ut diam
          ligula. Cras ornare eget enim et tempus. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. Quisque urna odio, congue eget
          pretium et, efficitur sed ante. Integer efficitur, elit sit amet
          mollis ultrices, lacus leo finibus mi, eu interdum mauris metus at
          risus. Cras et nibh sit amet leo fermentum vestibulum. Sed dictum,
          magna et facilisis tincidunt, elit justo volutpat odio, eu hendrerit
          nunc ligula laoreet nisl. Suspendisse in molestie tellus. Etiam
          aliquam dignissim ante. Integer lobortis, ligula elementum porttitor
          lacinia, nulla elit porttitor mi, in suscipit est libero vitae orci.
          Vestibulum pretium, lacus in ultricies malesuada, velit est viverra
          nibh, nec iaculis dolor quam quis dui. Quisque condimentum tellus quis
          justo semper, ac iaculis leo condimentum. Maecenas dignissim rutrum
          nisl. Curabitur fringilla tellus eget arcu sodales, sed dictum sem
          placerat. Phasellus commodo leo ac mauris tempor, cursus fermentum leo
          commodo. Sed pulvinar felis et interdum porta. Suspendisse tincidunt,
          odio sit amet semper lobortis, nisi urna facilisis est, a elementum
          nisl nulla quis urna. Aliquam erat volutpat. In ac vulputate libero.
          Donec vel ornare velit. Proin congue semper orci, ut auctor est
          viverra at. Etiam sed iaculis lorem. Quisque pharetra, turpis at
          condimentum molestie, dolor lorem convallis urna, sit amet faucibus
          elit nunc tincidunt neque. Cras eget imperdiet nunc. Mauris commodo
          ipsum non leo blandit, at malesuada sapien euismod. Fusce et nulla
          erat. Quisque velit tortor, dapibus et diam vel, lobortis porttitor
          purus. Pellentesque vel nisi ex. Phasellus euismod commodo lorem, et
          suscipit nulla. Vestibulum nulla lacus, luctus vitae elementum ac,
          dignissim at tortor. Morbi nisl nisi, tristique at ultricies sed,
          ultricies id orci. Vivamus vel tortor aliquam, tempor est sit amet,
          egestas urna. Cras tempus fermentum erat. Aliquam convallis orci
          ipsum, vel fermentum sem sollicitudin eget. Nam congue elit lectus,
          non fermentum tortor tincidunt non. Cras diam magna, iaculis ac
          dignissim nec, scelerisque at nisi. Nam eu ante scelerisque erat
          posuere viverra gravida eu orci. Donec auctor varius molestie. Vivamus
          imperdiet, dolor non ultricies maximus, velit metus placerat eros, nec
          laoreet lorem nisl ac metus. Integer quis fermentum justo. Morbi
          pretium mollis urna. Sed nec urna urna. Fusce mattis ullamcorper eros
          id egestas. In molestie, odio nec posuere dignissim, magna elit
          consequat nulla, nec porttitor nisl neque at ligula. Duis dapibus in
          felis non mattis. Suspendisse in nulla lobortis, fringilla sem non,
          cursus mi. Nulla laoreet turpis elit, vitae ultricies odio suscipit
          sit amet. Ut eu ex augue. Integer a sapien urna. Pellentesque ut
          suscipit ex. Aliquam et sem ullamcorper, maximus diam in, ultricies
          tellus. Mauris sollicitudin sodales lectus vel aliquam. Duis at nisi
          malesuada, luctus arcu sit amet, mattis turpis. Donec porttitor
          sollicitudin est, a ullamcorper est porta ut. Cras sollicitudin velit
          tellus, ut eleifend risus sodales quis. Phasellus ullamcorper mauris
          et sem tempus, vel efficitur odio iaculis. Vestibulum tellus enim,
          iaculis at purus in, aliquet imperdiet urna. Nullam sit amet sem nisi.
          Cras nec semper metus, ut viverra dolor. Duis id lacinia erat.
          Curabitur accumsan velit sit amet ultrices varius. Nullam dictum
          maximus tincidunt. Donec ultrices id ipsum ullamcorper elementum.
          Aliquam hendrerit, dui eget dictum sodales, tortor nibh hendrerit mi,
          ac varius velit lacus sed purus. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Nam eget porta
          velit, eu dapibus mi. Sed iaculis magna et arcu dapibus maximus. Nulla
          aliquam, enim venenatis ultricies vestibulum, eros mi laoreet augue,
          ac aliquam justo felis et turpis. Praesent commodo nunc ex, vel
          interdum tellus ultricies lobortis. Nam sed dignissim sem. Maecenas eu
          urna at neque vulputate ultricies. Nam eget mi quis lacus varius
          imperdiet at facilisis quam. Mauris ut justo efficitur, consequat
          massa quis, tempus justo. Donec luctus gravida lacus nec ornare.
          Pellentesque in volutpat urna. Ut consectetur aliquam nisl vel
          iaculis. Integer in sem ut diam pharetra scelerisque. Donec sit amet
          lacus id leo finibus hendrerit. Sed fermentum sit amet tellus nec
          auctor. Nunc venenatis massa accumsan dolor luctus sollicitudin.
          Suspendisse ullamcorper eu magna sit amet auctor. Proin mi lacus,
          malesuada ac ante sed, elementum ultrices metus. Fusce fringilla
          tempus mi vitae laoreet. Sed elementum ligula nunc, vitae laoreet
          neque lacinia eget. Nunc molestie mauris ac nibh ornare, quis
          efficitur ante venenatis. Nullam gravida erat ut mattis tempus. Donec
          convallis nisl id euismod fermentum. Integer commodo dolor vel odio
          convallis, in tristique ante rutrum. Maecenas dignissim dolor a odio
          faucibus dignissim. In nisl lorem, faucibus id mi quis, consequat
          tincidunt nisl. Nullam congue sapien id enim hendrerit consectetur.
          Etiam ut augue congue felis varius volutpat tristique sed urna. Morbi
          et cursus erat. Aenean aliquam dui a ullamcorper consequat. Donec
          congue maximus orci, at sollicitudin tellus dictum a. Praesent risus
          nulla, vehicula euismod posuere eu, ullamcorper eu dui. Donec vel
          sapien eu enim pretium mollis. Etiam efficitur fermentum ligula sed
          pretium. Aenean a elit justo. Nam pretium lacinia dui, et condimentum
          purus dapibus vel. Nunc tincidunt elementum ipsum eget pharetra.
          Vestibulum ornare commodo sagittis. Integer lobortis lacinia lectus,
          ut consequat diam interdum et. Praesent lorem orci, laoreet et elit
          sed, tempus commodo quam. Aenean a quam mauris. Curabitur semper quis
          odio in congue. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Fusce auctor dolor non ligula
          faucibus, ac volutpat justo volutpat. Nulla sed magna suscipit nulla
          fringilla bibendum eu consectetur tortor. Fusce vehicula lobortis
          magna auctor feugiat. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Vivamus egestas ex congue volutpat lobortis. Curabitur eu
          ipsum libero. Proin mattis mi quis sapien egestas rhoncus.
          Pellentesque porttitor tincidunt gravida. Vestibulum ultricies sem et
          nisi tempor, et tincidunt felis placerat. Vestibulum consectetur porta
          massa at tincidunt. Curabitur eleifend velit at rhoncus auctor. Donec
          fermentum ornare libero convallis finibus. Proin lacinia, sem in
          semper dapibus, mi purus bibendum velit, ut efficitur enim nibh ut
          lorem. Integer tincidunt efficitur risus, ac luctus nisl suscipit vel.
          <h1>
            Donec maximus augue odio, sed convallis dolor semper sed. Curabitur
            sit amet porta odio. Nulla convallis, ante vel volutpat laoreet,
            dolor orci vehicula orci, eu ullamcorper sapien tortor id massa.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Quisque porttitor est nunc, id tempor dui
            aliquam in. Aenean nisl nibh, vestibulum vel aliquet at, interdum
            quis ante. Vivamus tincidunt nulla magna, vel molestie neque
            consequat sed. Integer elementum purus eu aliquam iaculis. Cras
            fringilla, quam vel suscipit aliquam, orci velit tincidunt nibh, et
            faucibus sem mi tempus dui. Curabitur pulvinar commodo ex, quis
            tincidunt nulla imperdiet ut. Donec aliquam, metus sit amet tempor
            maximus, velit odio mollis ligula, vitae congue est justo pulvinar
            nisl. Curabitur porta, dolor sed pellentesque facilisis, urna justo
            aliquam lectus, at lacinia lorem tortor sit amet velit. Sed a mauris
            orci. Suspendisse potenti. Etiam sagittis malesuada mollis. Proin
            interdum
          </h1>{" "}
          vulputate nulla. Proin ac convallis sapien. Maecenas laoreet dapibus
          ex, vel ultricies lectus mattis ac. Vestibulum suscipit neque vitae
          velit consequat, eget tincidunt ipsum venenatis. Integer nec lectus
          laoreet, bibendum arcu non, volutpat nunc. Aliquam a dui eu lorem
          consectetur vulputate ut eu leo. Mauris iaculis aliquam augue, in
          mattis metus gravida accumsan. Nullam sollicitudin mi ac neque aliquam
          porttitor. Cras semper elit et sem aliquam suscipit. Pellentesque a
          ipsum velit. Nam feugiat, eros in vehicula hendrerit, elit nisi
          pharetra nulla, vel sodales lorem nisi sit amet ipsum. Phasellus at
          tristique turpis. Cras est nunc, fermentum ac leo non, facilisis
          fringilla augue. Quisque a auctor dui. Mauris eleifend nunc eget
          fermentum faucibus. Nulla eget quam at massa lacinia volutpat.
          Maecenas dictum augue orci, in blandit lectus consectetur quis. In
          urna orci, interdum eget maximus quis, sagittis non massa. Vivamus
          congue placerat velit, varius tristique nisl suscipit et. Etiam nec
          sem orci. Nam sed dignissim eros. Maecenas a dapibus lacus, quis
          pretium ipsum. Cras dictum libero finibus risus gravida dictum. Proin
          non tristique elit. Nullam vehicula at nibh nec hendrerit. Nullam id
          ante lacus. Nam sed facilisis arcu, ut vehicula metus. Aliquam et
          augue augue. Nam accumsan magna velit, sed fringilla sem ultricies ac.
          Quisque non rutrum diam.
        </p>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<{ session: Session | null }>> => {
  const session: Session | null = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  return {
    props: {
      session,
    },
  };
};
