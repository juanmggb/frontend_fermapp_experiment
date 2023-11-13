import { useState } from "react";

export const useMemberDetailsModal = (members) => {
  const [memberDetailsModal, setMemberDetailsModal] = useState({});
  const [showMemberDetailsModal, setShowMemberDetailsModal] = useState(false);

  const handleShowMemberDetailsModal = (memberId) => {
    const memberDetailsModalSelected = members.find(
      (member) => member.id === memberId
    );

    console.log(memberDetailsModalSelected);

    setMemberDetailsModal(memberDetailsModalSelected);
    setShowMemberDetailsModal(true);
  };

  const handleHideMemberDetailsModal = () => setShowMemberDetailsModal(false);

  return {
    memberDetailsModal,
    showMemberDetailsModal,
    handleShowMemberDetailsModal,
    handleHideMemberDetailsModal,
  };
};
