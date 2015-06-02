using UnityEngine;
using System.Collections;
using System;


public class LimitCameraMovement : MonoBehaviour {
	

	// Update is called once per frame
	void Update () {
		var pos = transform.position;
		transform.position = new Vector3(
			Mathf.Clamp(pos.x, -10, 10), 
			Mathf.Clamp(pos.y, -10, 10),
			0
			);
	}
}
