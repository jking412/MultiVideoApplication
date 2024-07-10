struct preview{build(){Row() {
            Text(item.getTime())
              .opacity(CommonConstants.TEXT_OPACITY[2])
              .fontSize($r('app.float.all_comments_comment_time_font'))
              .lineHeight($r('app.float.all_comments_comment_time_line'))
              .fontWeight(FontWeight.Normal)
              .margin({ left: $r('app.float.all_comments_comment_time_margin') })

            Blank()

            IconImage({ image: $r('app.media.ic_public_comments'), icon: $r('app.media.ic_public_comments') })
              .margin({ right: $r('app.float.all_comments_icon_margin') })
            IconImage({ image: $r("app.media.ic_public_thumb_sup"),change: $r('app.media.ic_public_share'), icon: $r("app.media.ic_public_thumb_sup") })
              .margin({ right: $r('app.float.all_comments_icon_margin') })
            IconImage({ image: $r('app.media.ic_public_share'), icon: $r('app.media.ic_public_share') })
          }
          .margin({ top: $r('app.float.all_comments_icon_row_top') })
          .width(CommonConstants.FULL_PERCENT)
          .justifyContent(FlexAlign.Start)}}