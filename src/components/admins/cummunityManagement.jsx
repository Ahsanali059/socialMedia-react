import {useState,useEffect} from 'react'

import {useSelector,useDispatch} from 'react-redux'

import {
    getCommunitiesAction,
    getModeratorsAction,
    addModeratorAction,
    removeModeratorAction,
    getCommunityAction,
} from "../../redux/actions/adminActions";


const CommunityManagement = ()=>{
    const dispatch = useDispatch();
    const communities = useSelector((state)=>state.admin?.communities);
    const moderators = useSelector((state) => state.admin?.moderators);
    const community = useSelector((state) => state.admin?.community);

}