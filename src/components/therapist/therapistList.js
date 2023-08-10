import React, { useMemo } from 'react'
import TherapistCard from '../card/therapistCard';

const TherapistList = ({ pros, modality, specialization, tier, available, type, state, insurance }) => {
  console.log('state', state)
  const filteredPros = useMemo(() => {
    return pros && pros.filter((pro) => {

      // If modality filter is selected, check if the pro has the selected modality
      if (modality && !pro.modalities.some((temp) => temp.id === modality.id)) {
        return false;
      }
  
      // If specialization filter is selected, check if the pro has the selected specialization
      if (specialization && !pro.specializations.some((temp) => temp.id === specialization.id)) {
        return false;
      }
  
      // If tier filter is selected, check if the pro has the selected tier
      if (tier) {
        if (tier.id === 'resident' && pro.role !== 'resident') return false;
        if (tier.id === 'qualifying' && pro.role !== 'qualifying') return false;
        if (tier.id === 'licensed' && (pro.role !== 'licensed' && pro.role !== 'supervisor')) return false;
      }
  
      if (available && !pro.isAccepting) return false;

      if (insurance) {
        if (pro.type !== insurance) return false;
      }

      if (type) {
        if (type.id === 'couple' && !pro.couple) return false; 
      }

      if (state) {
        if (!pro.stateIds.includes(state.id)) return false;
      }
  
      // If all filters pass, include the pro in the filtered array
      return true;
    });
  }, [pros, modality, specialization, tier, available, state, type]);
  

  return (
    <div className="mt-12 flex flex-wrap justify-center">
      {filteredPros && filteredPros.length > 0 ? (
        filteredPros.map((pro) => <TherapistCard key={pro.id} data={pro} />)
      ) : (
        <div className="text-center text-gray-600">
          Sorry, we don't have any therapists available based on your selected filters.
        </div>
      )}
    </div>
  );
};

export default TherapistList;