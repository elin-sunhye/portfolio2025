import style from './flextBox.module.scss'

interface FlextBoxProps {
  justifyContent?: 'start' | 'end'
  alignItems?: 'start' | 'end'
  flexWrap?: 'wrap'
  alignContent?: 'start' | 'end'
  children: React.ReactNode
}
/**
 *
 * @param justifyContent 가로 정렬
 * @param alignItems 세로 정렬
 * @param alignContent 세로 정렬 (flex-wrap: wrap 일 경우)
 */
export default function FlextBox({
  justifyContent,
  alignItems,
  flexWrap,
  alignContent,
  children,
  ...props
}: FlextBoxProps) {
  return (
    <div
      className={`
	${
    justifyContent
      ? justifyContent === 'start'
        ? style.justify_content_start
        : style.justify_content_end
      : ''
  }
	${
    alignItems
      ? alignItems === 'start'
        ? style.align_items_start
        : style.align_items_end
      : ''
  }
	${flexWrap && flexWrap === 'wrap' ? style.flex_rap : ''}
	${
    alignContent
      ? alignContent === 'start'
        ? style.align_content_start
        : style.align_content_end
      : ''
  }
`}
      {...props}
    >
      {children}
    </div>
  )
}
