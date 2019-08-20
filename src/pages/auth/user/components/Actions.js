import { inject, observer } from 'mobx-react'
import { Divider, Icon, Tooltip } from 'antd'
import React from 'react'

const Actions = inject('userStore')(observer((props) => {
	return (
		<span>
			<Tooltip title="修改">
        <a><Icon type="edit"/></a>
      </Tooltip>

			<Divider type="vertical"/>

			{props.record && props.record.status === 1 ?

				<Tooltip title="停用" mouseLeaveDelay={0}>
					<a onClick={() => {
						props.userStore.deactivate(props.record.id)
							.catch(e => {
								console.log(e)
							})
						console.log('停用')
					}}><Icon type="stop"/></a>
				</Tooltip>
				:
				<Tooltip title="启用" mouseLeaveDelay={0}>
					<a onClick={() => {
						props.userStore.activate(props.record.id)
							.catch(e => {
								console.log(e)
							})
						console.log('启用 ')
					}}><Icon type="check-circle"/></a>
				</Tooltip>
			}

			<Divider type="vertical"/>

			<Tooltip title="删除" mouseLeaveDelay={0}>
        <a onClick={() => {
	        props.userStore.delUserById(props.record.id)
		        .catch(e => {
			        console.log(e)
		        })
        }}><Icon type="delete"/></a>
      </Tooltip>

      </span>
	)
}))

export default Actions
