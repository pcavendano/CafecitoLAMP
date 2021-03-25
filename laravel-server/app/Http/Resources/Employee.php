<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Employee extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'fullName' => $this->fullName,
            'email' => $this->email,
            'mobile' => $this->mobile,
            'city' => $this->city,
            'gender' => $this->gender,
            'departmentId' => $this->departmentId,
            'hireDate' => $this->hireDate,
            'isPermanent' => $this->isPermanent,
        ];
    }
}
